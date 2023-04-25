


<Container id="footer">
<Profile>
  <Slide direction="left" delay={1}>
    <h1>Contact Me </h1>
  </Slide>
  <div className="address">
    <Slide direction="left">
      <h1>Address:</h1>
    </Slide>
    <Slide direction="left">
      <p>San Diego, California, 92109</p>
    </Slide>
  </div>
  <div className="links">
    <Slide direction="left">
      <h1>Contact me directly:</h1>
    </Slide>
    <div>
    </div>
    <div>
      <Slide direction="left">
        <span>
          <HiOutlineMailOpen />
        </span>
      </Slide>
      <Slide>
        <p>John.Lenz29@gmail.com</p>
      </Slide>
    </div>
  </div>
  <div className="profiles">
    <Slide direction="left">
      <h1>See my profiles</h1>
    </Slide>
    <div className="icons">
      <Zoom>
        <span>
          <a href="https://github.com/jlenz27">
            <AiFillGithub />
          </a>
        </span>
      </Zoom>
      <Zoom>
        <span>
          <a href="https://www.linkedin.com/in/john-lenz27">
            <AiFillLinkedin />
          </a>
        </span>
      </Zoom>
      <Zoom>
        <span>
          <a href="/">
            <BsFacebook />
          </a>
        </span>
      </Zoom>
      <Zoom>
        <span>
          <a href="/">
            <BsSlack />
          </a>
        </span>
      </Zoom>
    </div>
  </div>
  <Fade>
    <ArrowUp onClick={scrollUp}>
      <AiOutlineArrowUp />
    </ArrowUp>
  </Fade>
</Profile>