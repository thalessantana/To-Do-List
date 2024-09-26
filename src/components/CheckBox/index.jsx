import {CheckboxContainer} from "./styles.js";
import {HiddenCheckbox} from "./styles.js";
import {StyledCheckbox} from "./styles.js";

const Checkbox = ({ checked, onChange }) => (
    <CheckboxContainer>
      <StyledCheckbox checked={checked}>
        <HiddenCheckbox checked={checked} onChange={onChange} />
      </StyledCheckbox>
    </CheckboxContainer>
  );

export default Checkbox;