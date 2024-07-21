import { Button } from "@/components/ui/button";
import {signInAction} from "@/actions/auth-actions";


const Home = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <form action={signInAction} className="flex flex-col items-center">
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Home;

