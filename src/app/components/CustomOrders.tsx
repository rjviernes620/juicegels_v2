import React, { useState } from "react";

const CHECKOUT_API_BASE = "https://juicegels-v2.onrender.com";

type Attachment = {
  filename: string;
  content: string;
  contentType: string;
};

type FormData = {
  name: string;
  email: string;
  instagram: string;
  shape: string;
  length: string;
  details: string;
  attachments: Attachment[];
};

const initialForm: FormData = {
  name: "",
  email: "",
  instagram: "",
  shape: "Almond",
  length: "Medium",
  details: "",
  attachments: [],
};

export function CustomOrders() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const currentAttachments = form.attachments || [];

      if (currentAttachments.length + filesArray.length > 5) {
        setFileError("You can only upload a maximum of 5 images.");
        return;
      }

      const maxSizeBytes = 4 * 1024 * 1024; // 4MB
      const tooLarge = filesArray.some((file) => file.size > maxSizeBytes);
      if (tooLarge) {
        setFileError("One or more files exceed the 4MB size limit.");
        return;
      }

      const promises = filesArray.map((file) => {
        return new Promise<Attachment>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const dataUrl = reader.result as string;
            const base64Str = dataUrl.split(",")[1];
            resolve({
              filename: file.name,
              content: base64Str,
              contentType: file.type,
            });
          };
          reader.onerror = (err) => reject(err);
        });
      });

      Promise.all(promises).then((newAttachments) => {
        setForm((prev) => ({
          ...prev,
          attachments: [...(prev.attachments || []), ...newAttachments]
        }));
      }).catch(err => {
        console.error("Error reading files:", err);
        setFileError("Failed to process one or more images.");
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    setFileError(null);
    setForm((prev) => ({
      ...prev,
      attachments: (prev.attachments || []).filter((_, idx) => idx !== index)
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.instagram.trim()) {
      newErrors.instagram = "Instagram handle is required";
    }
    if (!form.details.trim()) {
      newErrors.details = "Design details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setFileError(null);

    try {
      const response = await fetch(`${CHECKOUT_API_BASE}/create-custom-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit custom order.");
      }

      setSubmitSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "#ffd2e6", minHeight: "calc(100vh - 50px)", paddingBottom: 60 }}>
      {/* Hero Section */}
      <div 
        style={{ 
          background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", 
          padding: "36px 20px 28px", 
          textAlign: "center",
          borderBottom: "1px solid rgba(212, 84, 122, 0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12
        }}
      >
        <span style={{ fontSize: 32 }}>💅</span>
        <div>
          <h2 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 32, 
              color: "#fc6587", 
              margin: "0 0 6px",
              lineHeight: 1.2
            }}
          >
            Custom Press-On Nails
          </h2>
          <p 
            style={{ 
              color: "#4f444a", 
              margin: 0, 
              fontSize: 13, 
              fontWeight: 500,
              letterSpacing: "0.02em" 
            }}
          >
            Bring your dream nail concept to life 👑
          </p>
        </div>
      </div>

      {/* Main Content & Form */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 24, width: "100%", boxSizing: "border-box" }}>
        
        {/* Process Explanation */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 22, color: "#fff9fb", margin: "0 0 4px" }}>
            How the Process Works
          </h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#ffd6e9", color: "#fff", display: "flex", alignItems: "center", justifyContext: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>1</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4f444a" }}>
                <strong style={{ color: "#d14d4d" }}>Submit Your Design:</strong> Fill out the simple request form below describing your vision. Feel free to list specific colors, charms, or styles you love.
              </div>
            </div>
            
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#ffd6e9", color: "#d14d4d", display: "flex", alignItems: "center", justifyContext: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>2</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4f444a" }}>
                <strong style={{ color: "#d14d4d" }}>Check Your Inbox:</strong> You will receive an automated email confirmation summarizing your custom request details immediately. If you want to change anything. Just let me know
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#ffd6e9", color: "#d14d4d", display: "flex", alignItems: "center", justifyContext: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>3</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4f444a" }}>
                <strong style={{ color: "#d14d4d" }}>Instagram Consultation:</strong> I will reach out to you via Instagram to discuss reference imagery, nail sizing, set pricing, and finalize design details.
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#ffd6e9", color: "#d14d4d", display: "flex", alignItems: "center", justifyContext: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>4</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4f444a" }}>
                <strong style={{ color: "#d14d4d" }}>Creation & Dispatch:</strong> Once details are finalized and payment is made, I hand-craft your custom press-on nails and ship them to you!
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div 
          style={{ 
            background: "#e0a2b4", 
            borderRadius: 16, 
            padding: "20px 18px", 
            border: "1px solid rgba(212, 84, 122, 0.18)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
          }}
        >
          {submitSuccess ? (
            <div style={{ textAlign: "center", padding: "20px 10px" }}>
              <span style={{ fontSize: 40 }}>🎉</span>
              <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 24, color: "#fff9fb", margin: "12px 0 8px" }}>
                Request Submitted!
              </h3>
              <p style={{ fontSize: 13.5, color: "#4f444a", lineHeight: 1.6, margin: "0 0 16px" }}>
                An initial confirmation email has been sent to you. Alyssa will reach out to you <strong>on Instagram only</strong> to finalize your custom design.
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                style={{ 
                  background: "#ffd6e9", 
                  color: "#fff", 
                  border: "none", 
                  borderRadius: 10, 
                  padding: "10px 24px", 
                  fontSize: 13, 
                  fontWeight: 600, 
                  cursor: "pointer" 
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 22, color: "#fff9fb", margin: "0 0 4px" }}>
                Custom Request Form
              </h3>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Sophie Wright" 
                  value={form.name} 
                  onChange={(e) => handleInputChange("name", e.target.value)} 
                  style={mkInput(!!errors.name)} 
                />
                {errors.name && <span style={{ fontSize: 11, color: "#c0392b" }}>{errors.name}</span>}
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. sophie@example.com" 
                  value={form.email} 
                  onChange={(e) => handleInputChange("email", e.target.value)} 
                  style={mkInput(!!errors.email)} 
                />
                {errors.email && <span style={{ fontSize: 11, color: "#c0392b" }}>{errors.email}</span>}
              </div>

              {/* Instagram */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>Instagram Handle</label>
                <input 
                  type="text" 
                  placeholder="e.g. @sophiewright" 
                  value={form.instagram} 
                  onChange={(e) => handleInputChange("instagram", e.target.value)} 
                  style={mkInput(!!errors.instagram)} 
                />
                {errors.instagram && <span style={{ fontSize: 11, color: "#c0392b" }}>{errors.instagram}</span>}
                <span style={{ fontSize: 11, color: "#4f444a" }}>⚠️ Communication about your custom set will only be via Instagram.</span>
              </div>

              {/* Shape */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>Nail Shape Preference</label>
                <select 
                  value={form.shape} 
                  onChange={(e) => handleInputChange("shape", e.target.value)} 
                  style={{
                    background: "#fff0f4",
                    border: "1.5px solid rgba(212, 84, 122, 0.18)",
                    borderRadius: 9,
                    padding: "10px 13px",
                    fontSize: 14,
                    color: "#8c8691",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box"
                  }}
                >
                  {["Square", "Almond", "Coffin", "Stiletto", "Oval", "Round", "Not Sure / Consult Me"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Length */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>Nail Length Preference</label>
                <select 
                  value={form.length} 
                  onChange={(e) => handleInputChange("length", e.target.value)} 
                  style={{
                    background: "#fff0f4",
                    border: "1.5px solid rgba(212, 84, 122, 0.18)",
                    borderRadius: 9,
                    padding: "10px 13px",
                    fontSize: 14,
                    color: "#8c8691",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box"
                  }}
                >
                  {["Short", "Medium", "Long", "Not Sure / Consult Me"].map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              {/* Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>Design Details & Concept</label>
                <textarea 
                  placeholder="Describe colors, reference ideas, themes, or custom charms you want Alyssa to incorporate..." 
                  value={form.details} 
                  onChange={(e) => handleInputChange("details", e.target.value)} 
                  rows={4}
                  style={{
                    background: "#fff0f4",
                    border: `1.5px solid ${errors.details ? "#c0392b" : "rgba(212, 84, 122, 0.18)"}`,
                    borderRadius: 9,
                    padding: "10px 13px",
                    fontSize: 14,
                    color: "#000000",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }}
                />
                {errors.details && <span style={{ fontSize: 11, color: "#c0392b" }}>{errors.details}</span>}
              </div>

              {/* Attachments */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#fff9fb", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  Images / Reference Designs (Optional)
                </label>
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="custom-file-upload"
                />
                <label 
                  htmlFor="custom-file-upload"
                  style={{
                    background: "#fff0f4",
                    border: "1.5px dashed rgba(212, 84, 122, 0.4)",
                    borderRadius: 9,
                    padding: "12px 14px",
                    fontSize: 13,
                    color: "#c4597d",
                    cursor: "pointer",
                    textAlign: "center",
                    fontWeight: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6
                  }}
                >
                  <span>📸 Click to upload reference images (max 5)</span>
                  <span style={{ fontSize: 11, color: "#8c8691" }}>JPEG, PNG formats accepted (max 4MB each)</span>
                </label>
                {fileError && <span style={{ fontSize: 11, color: "#c0392b" }}>{fileError}</span>}
                {form.attachments && form.attachments.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                    {form.attachments.map((file, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          background: "#fff0f4", 
                          border: "1px solid rgba(212, 84, 122, 0.15)",
                          padding: "4px 8px", 
                          borderRadius: 6, 
                          fontSize: 12, 
                          color: "#4f444a", 
                          display: "flex", 
                          alignItems: "center", 
                          gap: 6 
                        }}
                      >
                        <span style={{ maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {file.filename}
                        </span>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveFile(idx)}
                          style={{ 
                            background: "none", 
                            border: "none", 
                            color: "#c0392b", 
                            cursor: "pointer", 
                            fontWeight: "bold",
                            padding: 0
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {submitError && <p style={{ color: "#c0392b", fontSize: 12, margin: 0 }}>{submitError}</p>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  background: isSubmitting ? "rgba(212, 84, 122, 0.18)" : "#c281a9", 
                  color: "#ffffff", 
                  border: "none", 
                  borderRadius: 12, 
                  height: 46, 
                  fontWeight: 600, 
                  fontSize: 14, 
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em",
                  marginTop: 8
                }}
              >
                {isSubmitting ? "Submitting Request..." : "Submit Custom Request 💅"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

function mkInput(hasError: boolean): React.CSSProperties {
  return { 
    background: "#fff0f4", 
    border: `1.5px solid ${hasError ? "#c0392b" : "rgba(212, 84, 122, 0.18)"}`, 
    borderRadius: 9, 
    padding: "10px 13px", 
    fontSize: 14, 
    color: "#000000", 
    outline: "none", 
    width: "100%", 
    boxSizing: "border-box" 
  };
}
