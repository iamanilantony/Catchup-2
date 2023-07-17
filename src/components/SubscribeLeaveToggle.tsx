import { FC } from "react";
import { Button } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface SubscribeLeaveToggleProps {
  subredditId: string;
}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({
  subredditId
}) => {
  const {} = useMutation({
    mutationFn: async () => {
      const payload: SubscribeLeaveToggleProps = {
        subredditId
      };
      const { data } = await axios.post("/api/subreddit/subscribe", payload);
      return data as string;
    }
  });
  const isSubscribed = false;
  return isSubscribed
    ? <Button className="w-full mt-1 mb-4">Leave Community</Button>
    : <Button className="w-full mt-1 mb-4">Join to post</Button>;
};

export default SubscribeLeaveToggle;
