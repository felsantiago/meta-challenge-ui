import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import useStyles from './style';

const RewardCloud = () => {
  const [customers, setCustomers] = useState([]);
  const classes = useStyles();

  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 300
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250
    },
    {
      field: 'telephone',
      headerName: 'Telefone',
      width: 140
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 140
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
      )
    }
  ];

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
              onClick={() => console.log()}
            >
              Cadastrar novo Cliente
            </Button>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{ background: '#fff' }}>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={customers.map((item) => ({
                    id: item._id,
                    name: item.name,
                    email: item.email,
                    telephone: item.telephone,
                    cpf: item.cpf
                  }))}
                  columns={columns}
                  pageSize={5}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RewardCloud;
