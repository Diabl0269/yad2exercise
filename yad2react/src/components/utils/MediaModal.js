import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import useStyles from '../../muiStyles/modal'
import { useFormikContext } from 'formik'
import deleteMedia from '../../communication/deleteMedia'

export default ({ type }) => {
  const classes = useStyles()
  const { setFieldValue, values } = useFormikContext()
  const value = values[type]
  const defaultIDObj = { id: value[0], index: 0 }

  const [open, setOpen] = useState(false)
  const [mediaIDObj, setMediaIDObj] = useState(defaultIDObj)
  const [isNextMedia, setIsNextMedia] = useState(!!value[1])
  const [isPreviousMedia, setIsPreviousMedia] = useState(false)
  const [mediaDeleted, setMediaDeleted] = useState(false)

  const MediaTag = () => {
    const { id } = mediaIDObj
    const src = process.env.REACT_APP_STORAGE_PATH + id
    return type === 'images' ? <img src={src} className={classes.media} /> : <video src={src} />
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const deleteHandler = async () => {
    const didMediaGetDeleted = await deleteMedia(mediaIDObj.id)
    if (didMediaGetDeleted) setMediaDeleted(didMediaGetDeleted)
  }

  const advanceMedia = target => {
    const { index } = mediaIDObj
    const newIndex = index + (target === 'next' ? +1 : -1)
    setMediaIDObj({ id: value[newIndex], index: newIndex })
    checkAdvance(newIndex)
  }

  const checkAdvance = newIndex => {
    const previousExists = !!value[newIndex - 1]
    setIsPreviousMedia(previousExists)

    const nextExists = !!value[newIndex + 1]
    setIsNextMedia(nextExists)
  }

  return (
    <div className={classes.container}>
      <button type="button" onClick={handleOpen} className={classes.editButton}>
        ערוך
      </button>
      <Modal
        root={classes.root}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {mediaDeleted ? <h1>נמחק</h1> : <MediaTag />}
            <div className={classes.advanceButtonsContainer}>
              <button
                onClick={advanceMedia}
                className={classes.advanceButton}
                disabled={!isPreviousMedia}
              >
                קודם
              </button>
              <button
                onClick={() => advanceMedia('next')}
                className={classes.advanceButton}
                disabled={!isNextMedia}
              >
                הבא
              </button>
            </div>
            <button className={classes.deleteButton} onClick={deleteHandler}>
              מחיקה
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
