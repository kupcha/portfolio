import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';

const StyledEmailIcon = styled(EmailIcon)(({ theme }) => ({
  color: theme.palette.primary.main, // default color from theme
  '&:hover': {
    color: theme.palette.primary.light, // color on hover from theme
  },
  '&:onClick': {
    color: theme.palette.primary.light,
  },
  fontSize: '2.5rem'
}));

export default StyledEmailIcon;