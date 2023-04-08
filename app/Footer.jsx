export default function ({}) {
  return (
    <div className="uk-section uk-section-large">
      <div className="uk-container uk-text-center">
        <div className="uk-child-width-1-2@s uk-child-width-1-4@l" uk-grid="">
          <div className="">
            <a
              className="uk-icon-button uk-margin-small-right"
              uk-icon="facebook"
              href="#"
            ></a>
            <a
              className="uk-icon-button uk-margin-small-right"
              uk-icon="instagram"
              href="#"
            ></a>
            <a
              className="uk-icon-button uk-margin-small-right"
              uk-icon="pinterest"
              href="#"
            ></a>
            <a
              className="uk-icon-button uk-margin-small-right"
              uk-icon="twitter"
              href="#"
            ></a>
            <a
              className="uk-icon-button uk-margin-small-right"
              uk-icon="youtube"
              href="#"
            ></a>
          </div>

          <div>
            <h3>Paragraph</h3>
            <p>
              <a href="https://zummon.page/" target="_blank">
                Made by zummon
              </a>
            </p>
          </div>

          <div>
            <h3>List</h3>
            <ul className="uk-list">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>

          <div>
            <h3>List</h3>
            <ul className="uk-list">
              <li>
                <a href="#">Lorem, ipsum.</a>
              </li>
              <li>
                <a href="#">Lorem, ipsum.</a>
              </li>
              <li>
                <a href="#">Lorem, ipsum.</a>
              </li>
              <li>
                <a href="#">Lorem, ipsum.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
