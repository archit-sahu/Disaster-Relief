import { useState } from "react";
import { X, Shield, User, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GovernmentSeal from "./GovernmentSeal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "user" | "admin";
}

const LoginModal = ({ isOpen, onClose, type }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isAdmin = type === "admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login - in production, this would connect to auth system
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className={`px-6 py-8 ${isAdmin ? 'bg-gradient-to-br from-primary to-primary/80' : 'bg-gradient-to-br from-success to-success/80'}`}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <GovernmentSeal />
            </div>
            <DialogTitle className="text-2xl font-serif font-bold text-primary-foreground mb-1">
              {isAdmin ? "Administrator Access" : "Citizen Portal"}
            </DialogTitle>
            <p className="text-primary-foreground/80 text-sm">
              {isAdmin 
                ? "Authorized personnel only" 
                : "Access disaster relief services"
              }
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {isAdmin && (
            <div className="bg-emergency/10 border border-emergency/30 rounded-lg p-3 flex gap-3">
              <AlertCircle className="w-5 h-5 text-emergency flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80">
                This portal is restricted to authorized government officials only. Unauthorized access is prohibited.
              </p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder={isAdmin ? "admin@gov.in" : "citizen@email.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-government"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-government pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {isAdmin && (
            <div className="space-y-2">
              <Label htmlFor="adminCode">Administrator Code</Label>
              <Input
                id="adminCode"
                type="password"
                placeholder="Enter admin security code"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                className="input-government"
                required
              />
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline font-medium">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className={`w-full font-semibold py-6 ${
              isAdmin 
                ? 'bg-primary hover:bg-primary/90' 
                : 'bg-success hover:bg-success/90 text-success-foreground'
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Authenticating...
              </span>
            ) : (
              <>
                {isAdmin ? <Shield className="w-4 h-4 mr-2" /> : <User className="w-4 h-4 mr-2" />}
                {isAdmin ? "Access Dashboard" : "Sign In"}
              </>
            )}
          </Button>

          {!isAdmin && (
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Register here
              </a>
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
