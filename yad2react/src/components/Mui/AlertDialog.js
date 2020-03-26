import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import deleteUser from '../../communication/deleteUser'
import { navigate } from 'hookrouter'

export default () => {
  const [open, setOpen] = React.useState(false)

  const buttonText = 'מחק משתמש'
  const deleteButtonText = 'מחק'
  const cancelButtonText = 'ביטול'
  const titleText = 'מחיקת משתמש'
  const errorMessage = 'תקלת שרת'
  const defaultBodyText = 'פעולה זה תמחק את המשתמש ואת כל מידע שבו, האם אתה בטוח שברצונך להמשיך?'
  const [bodyText, setBodyText] = useState(defaultBodyText)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = async () => {
    const userDeleted = await deleteUser()
    userDeleted ? navigate('/') : setBodyText(errorMessage)
  }

  return (
    <div>
      <Button  color="primary" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{bodyText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelButtonText}
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            {deleteButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
