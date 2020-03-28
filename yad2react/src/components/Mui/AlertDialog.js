import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { navigate } from 'hookrouter'

export default ({ varsObj, deleteFunc, buttonClassName = '', id}) => {
  const [open, setOpen] = useState(false)
  const {
    buttonText,
    deleteButtonText,
    cancelButtonText,
    titleText,
    errorMessage,
    defaultBodyText,
    navigateTo
  } = varsObj
  const [bodyText, setBodyText] = useState(defaultBodyText)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setBodyText(defaultBodyText)
  }

  const handleDelete = async () => {
    const objectDeleted = await deleteFunc(id)
    objectDeleted ? navigate(navigateTo) : setBodyText(errorMessage)
  }

  return (
    <div className={buttonClassName}>
      <Button onClick={handleClickOpen}>{buttonText}</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText>{bodyText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{cancelButtonText}</Button>
          <Button onClick={handleDelete} autoFocus>
            {deleteButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
