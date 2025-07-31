"use client";
import SignupForm from "@/components/auth/forms/signupform";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Particles from "@/components/particles";

export default function SignupPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-full w-full flex items-center justify-center p-4 ">
      
      {/* particles background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <Particles particleColors={['#ffffff', '#ffffff']} particleCount={400} particleSpread={20} speed={0.1} particleBaseSize={60} moveParticlesOnHover={false} alphaParticles={false} disableRotation={true} />
      </div>
      
      {/* card content */}
      <div className="w-full max-w-md ">
        <Card className="bg-gradient-to-br from-card/80 via-card to-card/60 px-6 py-5 shadow-xl rounded-2xl z-10 backdrop-blur-sm">

          <CardHeader className="flex-col items-center py-8">
            <h4 className="text-2xl font-mono font-bold text-success text-center pb-1"> Sign Up </h4>
            <p className="text-sm text-default-500 text-center"> Create your new account! </p>
          </CardHeader>

          <CardBody className="pb-2">
            <SignupForm />
          </CardBody>

          <CardFooter className="flex-col items-center pb-4 pt-5">
            <p className="text-sm text-default-500 text-center">
              Already have an account? <Link href="/login" className="text-success font-medium hover:underline"> Log in here </Link>
            </p>
          </CardFooter>

        </Card>
      </div>
      
    </motion.div>
  );
}
