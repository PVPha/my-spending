const Login = () => {
  return (
    <>
      <section>
        <header>
          <h2 id="Forms">Forms</h2>
        </header>
        <form action="#">
          <fieldset>
            <legend>Form legend</legend>
            <div className="form-group">
              <label htmlFor="email">Email input:</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                minLength={5}
                placeholder="test"
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Text input:</label>
              <input
                id="text"
                name="text"
                type="text"
                required
                minLength={5}
                placeholder="test"
              />
            </div>
            <div className="form-group">
              <label htmlFor="itext">Invalid input (min-length 10):</label>
              <input id="itext" name="itext" type="text" minLength={10} />
            </div>
            <div className="form-group">
              <label htmlFor="pw">Password input:</label>
              <input type="password" id="pw" name="pw" value="password" />
            </div>
            <div className="form-group">
              <label htmlFor="radio">Radio input:</label>
              <input name="radio" type="radio" id="radio" />
            </div>
            <div className="form-group">
              <label htmlFor="check">Checkbox input:</label>
              <input type="checkbox" id="check" />
            </div>
            <div className="form-group">
              <label htmlFor="select">Select field:</label>
              <select id="select" name="select">
                <option> Option 01 </option>
                <option> Option 02 </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tarea">Textarea:</label>
              <textarea id="tarea" cols={30} rows={5} name="tarea">
                Textarea text
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="submit">Input Button:</label>
              <button
                className="btn btn-default"
                type="submit"
                role="button"
                name="submit"
                id="submit"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Login;
