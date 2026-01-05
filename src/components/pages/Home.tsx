import { 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Stack 
} from "@mui/material";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";

export const Home = () => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <CardContent>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            ようこそ
          </Typography>

          <Typography variant="body2" color="text.secondary">
            新しい旅程表を作成できます
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<NoteAddRoundedIcon />}
          >
            Create Itenary
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
