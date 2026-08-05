import { useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

const STORAGE_KEY = "portfolio-unlocked";

export const PasswordGate = ({ children }: { children: ReactNode }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
    setChecking(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("verify-site-password", {
        body: { password },
      });
      if (fnError) throw fnError;
      if (data?.valid) {
        sessionStorage.setItem(STORAGE_KEY, "true");
        setUnlocked(true);
      } else {
        setError("Senha incorreta. Tente novamente.");
      }
    } catch {
      setError("Não foi possível verificar a senha. Tente novamente.");
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  if (checking) return null;
  if (unlocked) return <>{children}</>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        <div className="space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-3xl text-foreground">Ligia Corrêa 🌿</h1>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            Este portfólio é privado. Digite a senha para continuar.{"\n"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-2">
            <Label htmlFor="site-password">Senha</Label>
            <Input
              id="site-password"
              type="password"
              autoFocus
              maxLength={200}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading || !password.trim()}>
            {loading ? "Verificando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default PasswordGate;
