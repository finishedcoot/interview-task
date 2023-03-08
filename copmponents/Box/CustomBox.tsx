import React, {ReactNode} from "react";
import {Box} from "@mui/material";

const CustomBox: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <Box component="div" sx={{
            mt: 4,
            p: 2,
            height: '90vh',
            borderStyle: 'solid',
            borderColor: 'white',
            backgroundColor: 'white',
            borderRadius: '10px',
            borderWidth: '1px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5
        }}>
            {children}
        </Box>
    )
}

export default CustomBox