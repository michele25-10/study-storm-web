import SportsScoreIcon from '@mui/icons-material/SportsScore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Groups2Icon from '@mui/icons-material/Groups2';

export const functionality = [
    {
        img: <CalendarMonthIcon style={{ height: "100px", width: "100px", color: "red" }} />,
        title: "Calendarizzazione",
        color: "green"
    },
    {
        img: <SportsScoreIcon style={{ height: "100px", width: "100px", color: "green" }} />,
        title: "Obiettivi",
        color: "orange",
    },
    {
        img: <QueryStatsIcon style={{ height: "100px", width: "100px", color: "purple" }} />,
        title: "Statistiche",
        color: "violet",
    },
    {
        img: <Groups2Icon style={{ height: "100px", width: "100px", color: "#007FFF" }} />,
        title: "Team",
        color: "lightblue"
    }
]