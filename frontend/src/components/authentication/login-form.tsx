import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { motion } from "framer-motion";

import innovationGirl from "@/assets/innovation-girl.jpg";

export function LoginForm({
  className}: React.ComponentProps<"div">) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn("flex flex-col gap-6", className)} 
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Card className="overflow-hidden p-0 bg-gradient-to-br from-zinc-900/10 to-zinc-800/20 border border-white/10 shadow-xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-7">
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-2">
                  <motion.h1 
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                  >
                    Welcome back
                  </motion.h1>
                  <motion.p className="text-muted-foreground text-balance">
                    Login to your Innovatix account
                  </motion.p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="grid gap-3">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="bg-zinc-800/50 border-zinc-700 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  </div>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      className="bg-zinc-800/50 border-zinc-700 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.a
                    whileHover={{ x: 2 }}
                    href="#"
                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors underline-offset-2 hover:underline text-right"
                  >
                    Forgot your password?
                  </motion.a>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium py-5"
                    >
                      Login
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
                  >
                    Sign up
                  </Link>
                </motion.div>
              </div>
            </form>
            <motion.div 
              className="bg-muted relative hidden md:block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="h-full w-full"
              >
                <img
                  src={innovationGirl}
                  alt="Innovation"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="text-muted-foreground *:[a]:hover:text-blue-400 text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 transition-all"
      >
        By clicking continue, you agree to our{" "}
        <a href="https://github.com/24kaushik/innovatix/blob/main/terms-of-service.md">
          Terms of Service
        </a>
        .
      </motion.div>
    </motion.div>
    
  );
}
