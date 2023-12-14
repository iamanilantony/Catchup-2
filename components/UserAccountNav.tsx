"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/Dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { LogOut, UserCog } from "lucide-react";
import { signOut } from "next-auth/react";

type UserAccountNavProps = {
  picture: string;
};

export default function UserAccountNav({ picture }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer">
          <UserCog className="mr-2 w-4 items-center" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 cursor-pointer flex"
          onSelect={() => {
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`
            });
          }}
        >
          <LogOut className="mr-2 w-4 items-center" />
          Signout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
