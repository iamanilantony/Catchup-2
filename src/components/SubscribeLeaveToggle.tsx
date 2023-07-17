"use client"

import { FC, startTransition } from "react";
import { Button, buttonVariants } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";
// import {loginToast} from '/hooks/use-custom-toast'

interface SubscribeLeaveToggleProps {
  subredditId: string;
  subredditName: string;
  isSubscribed: boolean
}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({
  subredditId,
  subredditName,
  isSubscribed
}) => {
  const router = useRouter();
  const {mutate: subscribe, isLoading: isSubsLoading} = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId
      };
      const { data } = await axios.post("/api/subreddit/subscribe", payload);
      return data as string;
    },
    onError: (err) => {
      if(err instanceof AxiosError){
        if(err.response?.status === 401){
          const {dismiss} = toast({
            title: 'Login Required',
            description: 'You need to be loggedin to do that',
            variant: 'destructive',
            action: (
                <Link
                     href='/sign-in'
                     onClick = {() => dismiss()}
                     className = {buttonVariants({variant: 'outline'})}
                >
                Login
                </Link>
            )
        })
        }
      }
      return toast({
        title: 'There was a problem',
        description: 'Something went wrong, please try again',
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh()
      })
      return toast({
        title: 'Subscribed',
        description: `You are now subscribed to ${subredditName}`
      })
    }
  });
  const {mutate: unsubscribe, isLoading: isUnSubscribing} = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId
      };
      const { data } = await axios.post("/api/subreddit/unsubscribe", payload);
      return data as string;
    },
    onError: (err) => {
      if(err instanceof AxiosError){
        if(err.response?.status === 401){
          const {dismiss} = toast({
            title: 'Login Required',
            description: 'You need to be loggedin to do that',
            variant: 'destructive',
            action: (
                <Link
                     href='/sign-in'
                     onClick = {() => dismiss()}
                     className = {buttonVariants({variant: 'outline'})}
                >
                Login
                </Link>
            )
        })
        }
      }
      return toast({
        title: 'There was a problem',
        description: 'Something went wrong, please try again',
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh()
      })
      return toast({
        title: 'unSubscribed',
        description: `You are now unsubscribed from ${subredditName}`
      })
    }
  });
  return isSubscribed
    ? <Button isLoading={isUnSubscribing} onClick={() => unsubscribe()} className="w-full mt-1 mb-4">Leave Community</Button>
    : <Button isLoading={isSubsLoading} onClick={() => subscribe()} className="w-full mt-1 mb-4">Join to post</Button>;
};

export default SubscribeLeaveToggle;
