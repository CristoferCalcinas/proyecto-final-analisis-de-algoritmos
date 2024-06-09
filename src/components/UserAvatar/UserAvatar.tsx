'use client'
import Avvvatars from "avvvatars-react";
import { useDashboardStore } from "@/store";

export const UserAvatar = () => {
    const has_permision = useDashboardStore(state => state.is_admin);
    return (
        <div className="flex items-center space-x-5">
            <span className="font-bold tracking-wider">
                {has_permision ? "Administrador" : "Usuario"}
            </span>
            <Avvvatars
                value={has_permision ? "Admin" : "User"}
                style="shape"
                size={40} shadow borderColor="#fff"
            />
        </div>
    )
}
