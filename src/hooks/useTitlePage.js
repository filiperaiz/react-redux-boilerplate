const useTitlePage = (title = 'app') => {
  document.title = title === 'app' ? 'app' : `${title} | app`
}

export default useTitlePage
