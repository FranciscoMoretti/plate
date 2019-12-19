import { Editor } from 'slate';
import { MENTION_TYPE } from './types';

export const withMention = (editor: Editor) => {
  const { isInline, isVoid } = editor;

  editor.isInline = element =>
    element.type === MENTION_TYPE ? true : isInline(element);

  editor.isVoid = element =>
    element.type === MENTION_TYPE ? true : isVoid(element);

  return editor;
};