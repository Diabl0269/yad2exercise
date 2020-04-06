import React, { useContext, useState } from 'react'
import ListItemContext from '../../context/ListItemContext'
import useStyles from '../../muiStyles/modal'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import favoriteSvg from '../../svg/favorite.svg'
import favoriteBorderSvg from '../../svg/favorite_border.svg'
import UserContext from '../../context/UserContext'
import toggleFavorite from '../../communication/toggleFavorite'

export default () => {
  const classes = useStyles()
  const pleaseLoginMessage = 'אנא התחבר'
  const noMediaImgPath = '/images/noImgs.jpg'
  const [user] = useContext(UserContext)

  const { favorites } = user
  const [open, setOpen] = useState(false)

  const {
    media: { images, videos },
    _id
  } = useContext(ListItemContext)

  const isListingFavorite = favorites && favorites.includes(_id)
  const initSvg = isListingFavorite ? favoriteSvg : favoriteBorderSvg
  const [svg, setSvg] = useState(initSvg)

  const numOfRecordImagesMinusOne = images.length - 1

  const mediaArr = images.concat(videos)
  const defaultObj = { id: mediaArr[0], index: 0, type: 'img' }
  const [mediaObj, setMediaObj] = useState(defaultObj)

  const [isNextMedia, setIsNextMedia] = useState(!!mediaArr[1])
  const [isPreviousMedia, setIsPreviousMedia] = useState(false)

  const handleFavoriteClick = async e => {
    e.stopPropagation()
    if (!favorites) return alert(pleaseLoginMessage)
    const success = await toggleFavorite(_id)
    if (!success) return alert('תקלת שרת')
    const svgToSet = Object.is(svg, favoriteBorderSvg) ? favoriteSvg : favoriteBorderSvg
    return setSvg(svgToSet)
  }

  const MediaTag = () => {
    const { id, type } = mediaObj
    
    const src = id ? process.env.REACT_APP_STORAGE_PATH + id : noMediaImgPath
    return type === 'img' ? (
      <img src={src} className={classes.media} id="recordMedia" alt="" />
    ) : (
      <video src={src} id="recordMedia" controls />
    )
  }

  const advanceMedia = (e, target) => {
    e.stopPropagation()
    const { index } = mediaObj
    const newIndex = index + (target === 'next' ? +1 : -1)
    const isImgIndex = newIndex < images.length
    const type = isImgIndex ? 'img' : 'video'
    setMediaObj({ id: mediaArr[newIndex], index: newIndex, type })
    checkAdvance(newIndex)
  }

  const checkAdvance = newIndex => {
    const previousExists = !!mediaArr[newIndex - 1]
    setIsPreviousMedia(previousExists)

    const nextExists = !!mediaArr[newIndex + 1]
    setIsNextMedia(nextExists)
  }

  const handleOpen = e => {
    e.stopPropagation()
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  return (
    <div className="img-container-root">
      <div onClick={handleOpen} id="img-container">
        <div id="faivoriteSvgContainer" onClick={handleFavoriteClick}>
          <img src={svg} id="faivoriteSvg" alt="" />
        </div>
        <MediaTag />
      </div>

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
            <MediaTag />
            <div className={classes.advanceButtonsContainer}>
              <button
                onClick={advanceMedia}
                className={classes.advanceButton}
                disabled={!isPreviousMedia}
              >
                קודם
              </button>
              <button
                onClick={e => advanceMedia(e, 'next')}
                className={classes.advanceButton}
                disabled={!isNextMedia}
              >
                הבא
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      {numOfRecordImagesMinusOne !== -1 && (
        <div className="img-icon-container">
          <div className="img-icon smaller-text">{numOfRecordImagesMinusOne}+</div>
        </div>
      )}
    </div>
  )
}
