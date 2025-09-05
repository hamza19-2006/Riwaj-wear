import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface CheckoutData {
  fullName: string;
  email: string;
  whatsapp: string;
}

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const submitOrder = async (data: CheckoutData) => {
    setIsLoading(true);
    
    try {
      const orderData = {
        id: crypto.randomUUID(),
        'Full Name': data.fullName,
        'E-mail': data.email,
        'What\'s app Number': data.whatsapp,
        'Order Cart': {
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            selectedSize: item.selectedSize,
            image: item.image
          })),
          totalPrice,
          orderDate: new Date().toISOString()
        }
      };

      const { error } = await supabase
        .from('data of website')
        .insert([orderData]);

      if (error) {
        throw error;
      }

      clearCart();
      
      toast({
        title: "Order Successful!",
        description: "Your order has been submitted successfully. You will be contacted soon.",
      });

      return { success: true };
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit order",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitOrder,
    isLoading
  };
};