import { Box, Paper, useTheme, Button, Icon, Divider } from '@mui/material';


export const FerramentasDeDetalhe: React.FC = () => {

  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'
    >
      <Button
        variant='contained'
        disableElevation
        color='primary'
        startIcon={<Icon>save</Icon>}
      >Salvar</Button>

      <Button
        variant='outlined'
        disableElevation
        color='primary'
        startIcon={<Icon>save</Icon>}
      >Salvar e Voltar</Button>
      
      <Button
        variant='outlined'
        disableElevation
        color='primary'
        startIcon={<Icon>delete</Icon>}
      >Apagar</Button>

      <Button
        variant='outlined'
        disableElevation
        color='primary'
        startIcon={<Icon>add</Icon>}
      >Novo</Button>

      <Divider orientation='vertical' sx={{ borderRightWidth: 2 }}/>

      <Button
        variant='outlined'
        disableElevation
        color='primary'
        startIcon={<Icon>arrow_back</Icon>}
      >Voltar</Button>
    </Box>
  );

};