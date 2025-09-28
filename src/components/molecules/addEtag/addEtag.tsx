import cn from 'classnames';
import { FC, KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { UIColor, UISize } from '../../../types';
import { Etag, Input } from '../../atoms';
import styles from './styles.module.scss';

export interface AddEtagProps {
  suggestedTags?: readonly string[];
  onTagsChange?: (tags: string[]) => void;
  initialTags?: string[];
  classes?: Partial<
    Record<'root' | 'area' | 'list' | 'error' | 'dropdown' | 'dropdownNew' | 'title', string>
  >;
}

const ERROR_TIMEOUT = 3000;
const MAX_ETAG_LENGTH = 40;
const MAX_ETAGS = 10;

const checkIfIncludesEtag = (etags: string[], target: string) =>
  etags.some((t) => t.toLowerCase() === target.toLowerCase());

export const AddEtag: FC<AddEtagProps> = ({
  suggestedTags = [],
  onTagsChange,
  initialTags = [],
  classes = {},
}) => {
  const { t } = useTranslation();
  const [tags, setTags] = useState<string[]>(initialTags);
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [recommendedToAddTag, setRecommendedToAddTag] = useState('');
  const [showMaxError, setShowMaxError] = useState(false);

  const trimmedInput = useMemo(() => inputValue.trim(), [inputValue]);
  const isTyping = useMemo(() => inputValue.length > 0, [inputValue]);

  const filteredSuggestedTags = useMemo(
    () => suggestedTags.filter((tag) => !checkIfIncludesEtag(tags, tag)),
    [suggestedTags, tags],
  );

  const isTagExists = useMemo(() => checkIfIncludesEtag(tags, trimmedInput), [tags, trimmedInput]);

  const isTagExistsInSuggested = useMemo(
    () => checkIfIncludesEtag(filteredSuggestedTags, trimmedInput),
    [filteredSuggestedTags, trimmedInput],
  );

  const isDropdownVisible = useMemo(
    () => recommendedToAddTag.length > 0 || filteredSuggestedTags.length > 0,
    [recommendedToAddTag, filteredSuggestedTags],
  );

  const addTag = useCallback(
    (tag: string) => {
      if (tag.length > MAX_ETAG_LENGTH) {
        setShowMaxError(true);
        setTimeout(() => setShowMaxError(false), ERROR_TIMEOUT);
        return;
      }
      if (tags.length >= MAX_ETAGS) {
        setShowMaxError(true);
        setTimeout(() => setShowMaxError(false), ERROR_TIMEOUT);
        return;
      }
      if (tag && !checkIfIncludesEtag(tags, tag)) {
        const newTags = [...tags, tag];
        setTags(newTags);
        setInputValue('');
        setRecommendedToAddTag('');
        onTagsChange?.(newTags);
      }
    },
    [tags, onTagsChange],
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      const trimmed = value.trim();
      const existsInAdded = checkIfIncludesEtag(tags, trimmed);
      const existsInSuggested = checkIfIncludesEtag(filteredSuggestedTags, trimmed);
      setRecommendedToAddTag(
        !existsInAdded && !existsInSuggested && trimmed.length > 0 ? trimmed : '',
      );
    },
    [tags, filteredSuggestedTags],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && trimmedInput) addTag(trimmedInput);
    },
    [trimmedInput, addTag],
  );

  const handleRemoveTag = useCallback(
    (indexToRemove: number) => {
      const newTags = tags.filter((_, index) => index !== indexToRemove);
      setTags(newTags);
      onTagsChange?.(newTags);
    },
    [tags, onTagsChange],
  );

  useEffect(() => {
    if (isTyping && (isTagExists || isTagExistsInSuggested)) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), ERROR_TIMEOUT);
      return () => clearTimeout(timer);
    }
    setShowError(false);
  }, [isTyping, isTagExists, isTagExistsInSuggested]);

  return (
    <div className={cn(styles.addEtag, classes.root)} data-id-component="addEtag">
      <div className={cn(styles.addEtag__area, classes.area)}>
        {(showError || showMaxError) && (
          <div className={cn(styles.addEtag__error, classes.error)}>
            {showError && (
              <span>
                <b>{inputValue}</b> - {t('plugins.addEtag.alreadyExists')}
              </span>
            )}
            {showMaxError && (
              <span>
                {inputValue.length > MAX_ETAG_LENGTH
                  ? t('plugins.addEtag.maxLength', { max: MAX_ETAG_LENGTH })
                  : t('plugins.addEtag.maxCount', { max: MAX_ETAGS })}
              </span>
            )}
          </div>
        )}
        {tags.length > 0 && (
          <div className={cn(styles.addEtag__list, classes.list)}>
            {tags.map((tag, index) => (
              <Etag
                key={`${tag}-${index}`}
                title={tag}
                size={UISize.sm}
                isRemove
                onClick={() => handleRemoveTag(index)}
              />
            ))}
          </div>
        )}
        <Input
          placeholder={t('plugins.addEtag.placeholder')}
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          classes={{
            root: styles.addEtag__input,
            type: styles.addEtag__inputType,
            wrapper: styles.addEtag__inputWrapper,
          }}
        />
      </div>
      {isDropdownVisible && (
        <div className={cn(styles.addEtag__dropdown, classes.dropdown)}>
          <div className={cn(styles.addEtag__title, classes.title)}>
            {recommendedToAddTag.length > 0
              ? t('plugins.addEtag.dropdownTitleResults')
              : t('plugins.addEtag.dropdownTitleSuggested')}
          </div>
          {recommendedToAddTag.length > 0 && (
            <div className={cn(styles.addEtag__dropdownNew, classes.dropdownNew)}>
              <Etag
                color={UIColor.secondary}
                title={recommendedToAddTag}
                isAdd
                onClick={() => addTag(trimmedInput)}
              />
            </div>
          )}
          <div className={cn(styles.addEtag__list, classes.list)}>
            {filteredSuggestedTags.map((tag) => (
              <Etag
                key={tag}
                title={tag}
                size={UISize.sm}
                disabled={false}
                onClick={() => addTag(tag)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
