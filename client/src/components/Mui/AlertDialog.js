import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { navigate } from 'hookrouter'
import UserContext from '../../context/UserContext'

export default ({ varsObj, deleteFunc, containerClassName = '', id }) => {
  const [open, setOpen] = useState(false)
  const user = useContext(UserContext)
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
    objectDeleted ? user[1]({}) && navigate(navigateTo) : setBodyText(errorMessage)
  }

  return (
    <div className={containerClassName}>
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
