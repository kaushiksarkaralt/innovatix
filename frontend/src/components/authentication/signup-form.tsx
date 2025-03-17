import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { motion } from "framer-motion";
import innovationGirl from "@/assets/innovation-girl.jpg";

export function SignupForm({
  className}: React.ComponentProps<"div">) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className={cn("flex flex-col gap-6", className)} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="overflow-hidden p-0 bg-white/[3%] backdrop-blur-lg border-opacity-30 shadow-xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            <motion.form 
              className="p-6 md:p-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <div className="flex flex-col gap-7">
                <motion.div 
                  className="flex flex-col items-center text-center"
                  variants={item}
                >
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Welcome To Innovatix</h1>
                  <p className="text-muted-foreground text-balance mt-2">
                    Create a new Innovatix account
                  </p>
                </motion.div>
                
                <motion.div className="grid gap-3" variants={item}>
                  <Label htmlFor="firstname" className="text-sm font-medium">First Name</Label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Input
                      id="firstname"
                      type="text"
                      placeholder="John"
                      required
                      className="rounded-md border-opacity-50 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div className="grid gap-3" variants={item}>
                  <Label htmlFor="lastname" className="text-sm font-medium">Last Name</Label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Input
                      id="lastname"
                      type="text"
                      placeholder="Wick"
                      required
                      className="rounded-md border-opacity-50 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div className="grid gap-3" variants={item}>
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="rounded-md border-opacity-50 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div className="grid gap-3" variants={item}>
                  <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Johnwick01"
                      required
                      className="rounded-md border-opacity-50 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div className="grid gap-3" variants={item}>
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      className="rounded-md border-opacity-50 focus:border-blue-500 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={item}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 rounded-md transition-all duration-300"
                    >
                      Sign Up
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div className="text-center text-sm" variants={item}>
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 hover:text-blue-600 underline underline-offset-4 transition-colors duration-200">
                    Log In
                  </Link>
                </motion.div>
              </div>
            </motion.form>
            <motion.div 
              className="bg-muted relative hidden md:block overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src={innovationGirl}
                alt="Innovation"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        By clicking continue, you agree to our <a href="https://github.com/24kaushik/innovatix/blob/main/terms-of-service.md">Terms of Service</a>.
      </motion.div>
    </motion.div>
  );
}
