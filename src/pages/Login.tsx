import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
} from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "@/hooks/use-toast";
import { type ReduxStore } from "@/store";

import { useAppDispatch } from "@/hooks";
import { AxiosResponse } from "axios";
import { loginUser } from "@/featuers/user/userSlice";

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
}
export default Login;
