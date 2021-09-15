import { html } from '../element/templating/template.js';
import { ref } from '../element/templating/ref.js';
import { slotted } from '../element/templating/slotted.js';
import { endSlotTemplate, startSlotTemplate } from '../patterns/start-end.js';
import { whitespaceFilter } from '../utilities/whitespace-filter.js';

/**
 * The template for the TextField component.
 * @public
 */
export const textFieldTemplate = (context, definition) => html`
  <template class="${(x) => (x.readOnly ? 'readonly' : '')}">
    <label
      part="label"
      for="control"
      class="${(x) =>
        x.defaultSlottedNodes && x.defaultSlottedNodes.length
          ? 'label'
          : 'label hidden'}"
    >
      <slot
        ${slotted({
          property: 'defaultSlottedNodes',
          filter: whitespaceFilter
        })}
      ></slot>
    </label>
    <div class="root" part="root">
      ${startSlotTemplate(context, definition)}
      <input
        class="control"
        part="control"
        id="control"
        @input="${(x) => x.handleTextInput()}"
        @change="${(x) => x.handleChange()}"
        ?autofocus="${(x) => x.autofocus}"
        ?disabled="${(x) => x.disabled}"
        list="${(x) => x.list}"
        maxlength="${(x) => x.maxlength}"
        minlength="${(x) => x.minlength}"
        pattern="${(x) => x.pattern}"
        placeholder="${(x) => x.placeholder}"
        ?readonly="${(x) => x.readOnly}"
        ?required="${(x) => x.required}"
        size="${(x) => x.size}"
        ?spellcheck="${(x) => x.spellcheck}"
        :value="${(x) => x.value}"
        type="${(x) => x.type}"
        aria-atomic="${(x) => x.ariaAtomic}"
        aria-busy="${(x) => x.ariaBusy}"
        aria-controls="${(x) => x.ariaControls}"
        aria-current="${(x) => x.ariaCurrent}"
        aria-describedBy="${(x) => x.ariaDescribedby}"
        aria-details="${(x) => x.ariaDetails}"
        aria-disabled="${(x) => x.ariaDisabled}"
        aria-errormessage="${(x) => x.ariaErrormessage}"
        aria-flowto="${(x) => x.ariaFlowto}"
        aria-haspopup="${(x) => x.ariaHaspopup}"
        aria-hidden="${(x) => x.ariaHidden}"
        aria-invalid="${(x) => x.ariaInvalid}"
        aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
        aria-label="${(x) => x.ariaLabel}"
        aria-labelledby="${(x) => x.ariaLabelledby}"
        aria-live="${(x) => x.ariaLive}"
        aria-owns="${(x) => x.ariaOwns}"
        aria-relevant="${(x) => x.ariaRelevant}"
        aria-roledescription="${(x) => x.ariaRoledescription}"
        ${ref('control')}
      />
      ${endSlotTemplate(context, definition)}
    </div>
  </template>
`;