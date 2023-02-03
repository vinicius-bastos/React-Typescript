import { Box, Button, TextField, Paper, useTheme, InputAdornment, Icon } from '@mui/material';

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarBotaoNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarBotaoNovo
}) => {

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
      {mostrarInputBusca && (
        <TextField
          size='small'
          placeholder='Pesquisar...'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon>search</Icon>
              </InputAdornment>
            )
          }}
        />
      )}

      <Box flex={1} display='flex' justifyContent='end'>
        {mostrarBotaoNovo && (
          <Button
            variant='contained'
            disableElevation
            color='primary'
            onClick={aoClicarBotaoNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>
  );

};