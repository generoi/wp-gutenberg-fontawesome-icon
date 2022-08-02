import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { Path, SVG, TextControl, Popover, Button } from '@wordpress/components';
import { registerFormatType, insert, create, useAnchorRef } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const settings = {
  name: 'genero/fontawesome-icon',
  title: 'FontAwesome Icon',
  tagName: 'i',
  className: null,
  attributes: {
    className: 'class',
  },
  edit: InsertIcon,
}

function InlineUI({
  value,
  onChange,
  activeObjectAttributes,
  contentRef,
}) {
  const { className } = activeObjectAttributes;
  const [ classNames, setClassNames ] = useState(className);

  const anchorRef = useAnchorRef({
    ref: contentRef,
    value,
    settings,
  });

  return (
    <Popover
      position="bottom center"
      focusOnMount={ false }
      anchorRef={ anchorRef }
      className="block-editor-format-toolbar__image-popover"
    >
      <form
        className="block-editor-format-toolbar__image-container-content"
        onSubmit={ (event) => {
          const newReplacements = value.replacements.slice();

          newReplacements[ value.start ] = {
            type: settings.name,
            attributes: {
              ...activeObjectAttributes,
              className: classNames,
            },
          };

          onChange( {
            ...value,
            replacements: newReplacements,
          } );

          event.preventDefault();
        } }
      >
        <TextControl
          className="block-editor-format-toolbar__image-container-value"
          label={ __( 'Class names' ) }
          value={ classNames }
          onChange={ ( value ) => setClassNames(value) }
        />
        <Button
          icon={
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24">
              <Path d="M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z" />
            </SVG>
          }
          label={ __( 'Apply' ) }
          type="submit"
        />
      </form>
    </Popover>
  );
}

function InsertIcon({
  value,
  onChange,
  isObjectActive,
  activeObjectAttributes,
  contentRef,
}) {
  useEffect(() => {
    const {defaultView} = contentRef.current.ownerDocument;
    const selection = defaultView.getSelection();
    if (selection.anchorNode?.classList?.contains('fa')) {
      const range = document.createRange();
      range.selectNode(selection.anchorNode);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });

  function onClick() {
    const el = create({
      html: '<i class="fa fa-flag"></i> ',
    });
    onChange(insert(value, el));
  }

  return (
    <>
      <RichTextToolbarButton
        icon={
          <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <Path d="M444.373 359.424c0 7.168-6.144 10.24-13.312 13.312-28.672 12.288-59.392 23.552-92.16 23.552-46.08 0-67.584-28.672-122.88-28.672-39.936 0-81.92 14.336-115.712 29.696-2.048 1.024-4.096 1.024-6.144 2.048v77.824c0 21.405-16.122 34.816-33.792 34.816-19.456 0-34.816-15.36-34.816-34.816V102.4C12.245 92.16 3.029 75.776 3.029 57.344 3.029 25.6 28.629 0 60.373 0s57.344 25.6 57.344 57.344c0 18.432-8.192 34.816-22.528 45.056v31.744c4.124-1.374 58.768-28.672 114.688-28.672 65.27 0 97.676 27.648 126.976 27.648 38.912 0 81.92-27.648 92.16-27.648 8.192 0 15.36 6.144 15.36 13.312v240.64z"/>
          </SVG>
         }
        title="Insert Icon"
        onClick={ onClick }
        isActive={ isObjectActive }
      />
      { isObjectActive && (
        <InlineUI
          value={ value }
          onChange={ onChange }
          activeObjectAttributes={ activeObjectAttributes }
          isObjectActive={ isObjectActive }
          contentRef={ contentRef }
        />
      ) }
    </>
  );
}

registerFormatType(settings.name, settings);
