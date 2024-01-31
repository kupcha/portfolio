import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';

const StyledLinkedInIcon = styled(LinkedInIcon)(({ theme }) => ({
  color: theme.palette.primary.main, // default color from theme
  '&:hover': {
    color: theme.palette.primary.light, // color on hover from theme
  },
  '&:onClick': {
    color: theme.palette.primary.light,
  },
  fontSize: '2.5rem'
}));

export default StyledLinkedInIcon;