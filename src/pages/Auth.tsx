import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await signIn(email, password);
    
    if (error) {
      toast({
        title: "خرابی",
        description: error.message || "لاگ ان میں مسئلہ ہے",
        variant: "destructive",
      });
    } else {
      toast({
        title: "کامیابی",
        description: "آپ کامیابی سے لاگ ان ہو گئے",
      });
      navigate('/');
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await signUp(email, password, fullName);
    
    if (error) {
      toast({
        title: "خرابی",
        description: error.message || "اکاؤنٹ بنانے میں مسئلہ ہے",
        variant: "destructive",
      });
    } else {
      toast({
        title: "کامیابی",
        description: "آپ کا اکاؤنٹ بن گیا! اپنا ای میل چیک کریں",
      });
    }
    
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Gul ✿ Bahar
          </CardTitle>
          <CardDescription>
            اپنا اکاؤنٹ بنائیں یا لاگ ان کریں
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">لاگ ان</TabsTrigger>
              <TabsTrigger value="signup">اکاؤنٹ بنائیں</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">ای میل</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="آپ کا ای میل ایڈریس"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">پاس ورڈ</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="آپ کا پاس ورڈ"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'انتظار کریں...' : 'لاگ ان کریں'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">نام</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="آپ کا پورا نام"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">ای میل</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="آپ کا ای میل ایڈریس"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">پاس ورڈ</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="آپ کا پاس ورڈ"
                    minLength={6}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'انتظار کریں...' : 'اکاؤنٹ بنائیں'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
};

export default Auth;