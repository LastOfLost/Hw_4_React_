
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled(Switch)(({ theme }, isDarkMode) => ({
  width: 110,
  height: 40,
  padding: 7,
  borderRadius: 50,

    '& .MuiSwitch-switchBase': {
        width: 30, 
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(68px)',
            '& + .MuiSwitch-track': {
                color: 'black',
                backgroundColor: '#5932ea',
                opacity: 1,
                border: !isDarkMode ? '1.5px solid black' : 'none',
            },
        },
        '&.Mui-checked .MuiSwitch-thumb': {
            color: '#fff',
        },
    },
    '& .MuiSwitch-thumb': {
        color: '#7a5fdf',
        boxSizing: 'border-box',
        position: 'relative',
        top: 8,
        marginLeft: 8,
        width: 20,
        height: 20,
    },
    '& .MuiSwitch-track': {
        border: '1.5px solid black',
        borderRadius: 50,
        backgroundColor: '#f2efff',
        opacity: 1,
        transition: theme.transitions?.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default IOSSwitch;