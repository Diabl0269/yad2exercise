import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  advanceButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '30%'
  },
  advanceButton: {
    width: '50%'
  },
  deleteButton: {
    width: '30%'
  },
    editButton: {
    margin: 'none'
  },
  container: {
    display: 'flex',
    direction: 'ltr',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2% 0'
  },
  media: {
    width: '30%',
    height: '30%',
    alignSelf: 'center',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '2px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    backgroundColor: '#d5d5d5',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    outline: 0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
}))
