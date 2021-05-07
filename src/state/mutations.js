export default {
  savelist (state, questionlist) {
    state.questionlist = questionlist
    try {
      window.localStorage.setItem('questionlist', JSON.stringify(questionlist));
    } catch (e) {}
  }
}
