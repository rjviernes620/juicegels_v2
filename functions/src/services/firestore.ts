import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp();
}

export const db = getFirestore();

export interface OrderSummary {
  session_id: string;
  order_number?: string;
  created_at: string;
  payment_status: string;
  currency: string;
  subtotal: string;
  discount: string;
  shipping: string;
  total: string;
  coupon_code?: string;
  first_name: string;
  last_name: string;
  customer_email: string;
  phone?: string;
  instagram?: string;
  contact_preference?: string;
  notes?: string;
  shipping_method?: string;
  shipping_address?: string;
  billing_address?: string;
  payment_method_type?: string;
  card_brand?: string;
  card_last4?: string;
  card_wallet_type?: string;
  livemode: boolean;
  line_items: Array<{
    description: string;
    quantity: number;
    unit_price: string;
    line_total: string;
    image?: string;
    imageUrl?: string;
  }>;
}

export async function isMaintenanceActive(): Promise<boolean> {
  const envFlag = (process.env.MAINTENANCE_MODE || "").trim().toLowerCase();
  if (envFlag && !["false", "0", "no", "off"].includes(envFlag)) {
    return true;
  }

  try {
    const doc = await db.collection("system").doc("config").get();
    if (doc.exists) {
      return Boolean(doc.data()?.maintenanceMode);
    }
  } catch (err) {
    console.warn("Failed to check maintenance mode in Firestore:", err);
  }
  return false;
}

export async function setMaintenanceActive(active: boolean): Promise<void> {
  await db.collection("system").doc("config").set(
    {
      maintenanceMode: active,
      updatedAt: FieldValue.serverTimestamp()
    },
    { merge: true }
  );
}

export async function getNextOrderNumber(livemode: boolean): Promise<string> {
  const counterRef = db.collection("counters").doc(livemode ? "orders_live" : "orders_test");

  const orderNum = await db.runTransaction(async (transaction) => {
    const counterDoc = await transaction.get(counterRef);
    let nextNum = 1;

    if (counterDoc.exists) {
      const current = counterDoc.data()?.currentOrderNumber;
      if (typeof current === "number") {
        nextNum = current + 1;
      }
    } else {
      // Starting base number for friendly order IDs
      nextNum = livemode ? 1001 : 1;
    }

    transaction.set(
      counterRef,
      {
        currentOrderNumber: nextNum,
        updatedAt: FieldValue.serverTimestamp()
      },
      { merge: true }
    );

    return nextNum;
  });

  const formattedNum = orderNum.toString().padStart(4, "0");
  return livemode ? `JG-${formattedNum}` : `test-JG-${formattedNum}`;
}

export async function saveOrderToFirestore(orderSummary: OrderSummary): Promise<void> {
  const orderId = orderSummary.order_number || orderSummary.session_id;
  const orderRef = db.collection("orders").doc(orderId);

  await orderRef.set({
    ...orderSummary,
    orderId,
    status: "pending_sizes",
    createdAtFirestore: FieldValue.serverTimestamp()
  });
}

export async function updateOrderInFirestore(
  orderIdOrSessionId: string,
  updates: Record<string, any>
): Promise<boolean> {
  // Try finding by doc ID first
  let docRef = db.collection("orders").doc(orderIdOrSessionId);
  let doc = await docRef.get();

  if (!doc.exists) {
    // Query by session_id
    const snapshot = await db
      .collection("orders")
      .where("session_id", "==", orderIdOrSessionId)
      .limit(1)
      .get();

    if (!snapshot.empty) {
      docRef = snapshot.docs[0].ref;
    } else {
      console.warn(`Order ${orderIdOrSessionId} not found in Firestore.`);
      return false;
    }
  }

  await docRef.update({
    ...updates,
    updatedAt: FieldValue.serverTimestamp()
  });
  return true;
}

export async function getOrderFromFirestore(orderIdOrSessionId: string): Promise<Record<string, any> | null> {
  const doc = await db.collection("orders").doc(orderIdOrSessionId).get();
  if (doc.exists) {
    return doc.data() || null;
  }

  const snapshot = await db
    .collection("orders")
    .where("session_id", "==", orderIdOrSessionId)
    .limit(1)
    .get();

  if (!snapshot.empty) {
    return snapshot.docs[0].data() || null;
  }

  return null;
}
