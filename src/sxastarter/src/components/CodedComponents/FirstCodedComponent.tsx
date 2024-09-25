import React from 'react';
import {
  NextImage as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
 
interface Fields {
  MainContentImage: ImageField;
  Title: Field<string>;
  Paragraph: LinkField;
}
 
type ComponentProps = {
  params: { [key: string]: string };
  fields: Fields;
};
 
export const FirstCodedComponent = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-maincontentimage">
            <JssImage field={props.fields.MainContentImage} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-title">
                <JssRichText field={props.fields.Title} />
              </div>
            </div>
            <div className="field-paragraph">
              <JssLink field={props.fields.Paragraph} />
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  return <FirstCodedComponent {...props} />;
};