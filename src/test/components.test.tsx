/** @vitest-environment jsdom */
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CheckoutProgressBar } from '../app/components/CheckoutProgressBar';
import { CookieNotice } from '../app/components/CookieNotice';

describe('Website UI Components', () => {
  describe('CheckoutProgressBar', () => {
    it('renders all three checkout steps', () => {
      render(<CheckoutProgressBar page="basket" setPage={vi.fn()} />);

      expect(screen.getByText('Shopping Basket')).toBeInTheDocument();
      expect(screen.getByText('Customer Details')).toBeInTheDocument();
      expect(screen.getByText('Order Complete')).toBeInTheDocument();
    });

    it('allows navigating back to basket when currently on preorder page', () => {
      const setPageMock = vi.fn();
      render(<CheckoutProgressBar page="preorder" setPage={setPageMock} />);

      const basketStep = screen.getByLabelText('Shopping Basket - Step 1');
      expect(basketStep).toBeEnabled();

      fireEvent.click(basketStep);
      expect(setPageMock).toHaveBeenCalledWith('basket');
    });

    it('disables clicking ahead to preorder when on basket page', () => {
      const setPageMock = vi.fn();
      render(<CheckoutProgressBar page="basket" setPage={setPageMock} />);

      const preorderStep = screen.getByLabelText('Customer Details - Step 2');
      expect(preorderStep).toBeDisabled();

      fireEvent.click(preorderStep);
      expect(setPageMock).not.toHaveBeenCalled();
    });
  });

  describe('CookieNotice', () => {
    it('does not render if consent has already been accepted or declined', () => {
      const { container: containerAccepted } = render(
        <CookieNotice consent="accepted" onAccept={vi.fn()} onDecline={vi.fn()} />
      );
      expect(containerAccepted.firstChild).toBeNull();

      const { container: containerDeclined } = render(
        <CookieNotice consent="declined" onAccept={vi.fn()} onDecline={vi.fn()} />
      );
      expect(containerDeclined.firstChild).toBeNull();
    });

    it('renders and allows user to accept or decline cookies when consent is null', () => {
      const handleAccept = vi.fn();
      const handleDecline = vi.fn();

      render(
        <CookieNotice consent={null} onAccept={handleAccept} onDecline={handleDecline} />
      );

      expect(screen.getByText('Shopping Storage Notice 🌸')).toBeInTheDocument();

      const acceptButton = screen.getByText(/Got it!/i);
      fireEvent.click(acceptButton);
      expect(handleAccept).toHaveBeenCalledTimes(1);

      const declineButton = screen.getByText(/Opt Out/i);
      fireEvent.click(declineButton);
      expect(handleDecline).toHaveBeenCalledTimes(1);
    });

    it('toggles information section when "How this works" is clicked', () => {
      render(
        <CookieNotice consent={null} onAccept={vi.fn()} onDecline={vi.fn()} />
      );

      const toggleButton = screen.getByText(/How this works/i);
      expect(screen.queryByText(/What is stored:/i)).not.toBeInTheDocument();

      fireEvent.click(toggleButton);
      expect(screen.getByText(/What is stored:/i)).toBeInTheDocument();

      fireEvent.click(toggleButton);
      expect(screen.queryByText(/What is stored:/i)).not.toBeInTheDocument();
    });
  });
});
