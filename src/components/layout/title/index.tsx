import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { logo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="logo" width="30px" />
                ) : (
                    <img src={logo} alt="logo" width="50px" />
                )}
            </Link>
        </Button>
    );
};