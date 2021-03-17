import { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import useStyles from './style';
import TextField from '../../molecules/TextField';

const RewardCloud = () => {
  const [processings, setProcessings] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(undefined);
  const [active, setActive] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fields, setFields] = useState({});
  const [valid, setValid] = useState({
    email: false,
    buyerName: false,
    description: false
  });

  const isValidData = () => valid && status && active && valid.email && valid.buyerName && valid.description;

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeActive = (event) => {
    setActive(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  const columns = [
    {
      field: 'status',
      headerStatus: 'Status',
      width: 200
    },
    {
      field: 'dueDate',
      headerDueDate: 'Data de Vencimento',
      width: 250
    },
    {
      field: 'buyerName',
      headerBuyerName: 'Nome do Comprador',
      width: 300
    },
    {
      field: 'description',
      headerDescrition: 'Descrição',
      width: 250
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton aria-label='edit'>
            <EditIcon onClick={() => console.log(params.row)} />
          </IconButton>
          <IconButton aria-label='delete'>
            <DeleteIcon onClick={() => console.log({ id: params.row.id })} />
          </IconButton>
        </strong>
      ),
    },
  ];

  const textData = {
    activeLabel: 'Ativo *',
    buyerNameLabel: 'Nome do Comprador *',
    buyerNamePlaceholder: 'Digite o nome do comprador',
    descriptionLabel: 'Descrição *',
    descriptionPlaceholder: 'Digite a descrição do processo',
    dueDateLabel: 'Data de vencimento *',
    statusLabel: 'Status *',
    emailLabel: 'E-mail *',
    emailPlaceholder: 'Digite seu e-mail',
    requiredMessage: 'Campo obrigatório.',
    invalidEmailMessage: 'E-mail inválido.'
  };

  const DataGriView = () => (
    <DataGrid
      rows={processings.map((item) => ({
        id: item._id,
        name: item.name,
        email: item.email,
        telephone: item.telephone,
        cpf: item.cpf
      }))}
      columns={columns}
      pageSize={5}
    />
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log('Cadastrar aqui');
  };

  return (
    <div className={classes.rewardCloudContainer}>
      <div className={classes.responsiveContainer}>
        <Grid container spacing={2} item md={12} className={classes.wrapper}>
          <Grid item md={9} className={classes.title}>
            <h2>Lista de Processos</h2>
          </Grid>
          <Grid item md={5} className={classes.containerButton}>
            <Button
              className={classes.btnForm}
              disabled={false}
              onClick={handleClickOpen}
            >
              Cadastrar novo Processo
            </Button>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{ background: '#fff' }}>
              <div style={{ height: '400px', width: '100%' }}>
                <DataGriView />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Cadastrar novo Processo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Preencha o formulário abaixo para cadastrar um novo processo.
            </DialogContentText>
            <div>
              <FormControl variant='outlined' className={classes.formControlSelect}>
                <InputLabel>Ativo</InputLabel>
                <Select
                  value={active}
                  onChange={handleChangeActive}
                  label='Ativo'
                >
                  <MenuItem value=''>
                    <em>Nenhum</em>
                  </MenuItem>
                  <MenuItem value={10}>Ativo</MenuItem>
                  <MenuItem value={20}>Inativo</MenuItem>
                </Select>
              </FormControl>

              <TextField
                autoComplete='off'
                id='InputEmail'
                data-testid='InputEmail'
                type='email'
                label={textData.emailLabel}
                placeholder={textData.emailPlaceholder}
                className={classes.textField}
                onChange={(event) => setFields({
                  ...fields,
                  email: event.target.value
                })}
                onValidStateChange={(state) => setValid({
                  ...valid,
                  email: state
                })}
                pattern={
                  /^[a-zA-Z0-9+._%\-+]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+$/
                }
                invalidMessage={textData.invalidEmailMessage}
                InputLabelProps={{ shrink: true }}
                requiredMessage={textData.requiredMessage}
                required
                fullWidth
              />

              <TextField
                autoComplete='off'
                id='InputBuyerName'
                data-testid='InputBuyerName'
                label={textData.buyerNameLabel}
                placeholder={textData.buyerNamePlaceholder}
                className={classes.textField}
                onChange={(event) => setFields({
                  ...fields,
                  buyerName: event.target.value
                })}
                onValidStateChange={(state) => setValid({
                  ...valid,
                  buyerName: state
                })}
                InputLabelProps={{ shrink: true }}
                requiredMessage={textData.requiredMessage}
                required
                fullWidth
              />

              <TextField
                autoComplete='off'
                id='description'
                data-testid='description'
                label={textData.descriptionLabel}
                placeholder={textData.descriptionPlaceholder}
                className={classes.textField}
                onChange={(event) => setFields({
                  ...fields,
                  description: event.target.value
                })}
                onValidStateChange={(state) => setValid({
                  ...valid,
                  description: state
                })}
                InputLabelProps={{ shrink: true }}
                requiredMessage={textData.requiredMessage}
                required
                fullWidth
              />

              <FormControl variant='outlined' className={classes.formControlSelect}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    autoOk
                    variant='inline'
                    inputVariant='outlined'
                    label='Data de Vencimento'
                    format='MM/dd/yyyy'
                    value={selectedDate}
                    InputAdornmentProps={{ position: 'start' }}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>

              <FormControl variant='outlined' className={classes.formControlSelect}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  onChange={handleChangeStatus}
                  label='Status'
                  placeholder='Aqui'
                >
                  <MenuItem value=''>
                    <em>Nenhum</em>
                  </MenuItem>
                  <MenuItem value={10}>Verificar e revisar</MenuItem>
                  <MenuItem value={20}>Aprovação do centro de custo</MenuItem>
                  <MenuItem value={30}>Aprovação fiduciária</MenuItem>
                  <MenuItem value={30}>Aprovação do gerente de compras</MenuItem>
                  <MenuItem value={30}>Aprovação do CFO</MenuItem>
                  <MenuItem value={30}>Aprovada</MenuItem>
                  <MenuItem value={30}>Rejeitada</MenuItem>
                </Select>
              </FormControl>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant='outlined' color='secondary'>
              Cancelar
            </Button>
            <Button
              variant='contained'
              color='primary'
              disabled={!isValidData() || false}
              onClick={() => handleSubmit()}
            >
              Cadastrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default RewardCloud;
