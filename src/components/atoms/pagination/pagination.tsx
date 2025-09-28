import cn from 'classnames';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { IconMonoChevronLeft, IconMonoChevronRight } from '@frontend/ui-icons-v2';

import { UISize } from '../../../types';
import styles from './styles.module.scss';

export interface PaginationProps {
  size?: Exclude<UISize, UISize.lg | UISize.xl>;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  classes?: Partial<
    Record<
      'root' | 'button' | 'buttonText' | 'count' | 'list' | 'dots' | 'page' | 'pageActive' | 'icon',
      string
    >
  >;
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  size = UISize.sm,
  classes = {},
}) => {
  const handlePageClick = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages],
  );

  const handlePrevClick = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNextClick = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, onPageChange]);

  const pageNumbers = useMemo(() => {
    if (size !== UISize.md) return [];

    const pages: (number | '...')[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    // Add dots if needed before range
    if (rangeStart > 2) {
      pages.push('...');
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add dots if needed after range
    if (rangeEnd < totalPages - 1) {
      pages.push('...');
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, size]);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const { t } = useTranslation();

  return (
    <div
      className={cn(styles.pagination, styles.pagination + size, classes.root)}
      data-id-component="pagination"
    >
      {totalPages > 1 && (
        <button
          className={cn(
            styles.pagination__button,
            isPrevDisabled && styles.pagination__buttonDisabled,
          )}
          type="button"
          onClick={handlePrevClick}
          disabled={isPrevDisabled}
        >
          <span className={cn(styles.pagination__icon, classes.icon)}>
            <IconMonoChevronLeft />
          </span>
          {size === UISize.md && (
            <span className={cn(styles.pagination__buttonText, classes.buttonText)}>
              {t('plugins.pagination.previous')}
            </span>
          )}
        </button>
      )}

      {size === UISize.sm && (
        <div className={cn(styles.pagination__count, classes.count)}>
          {t('plugins.pagination.page')} <b>{currentPage}</b> {t('plugins.pagination.of')}{' '}
          <b>{totalPages}</b>
        </div>
      )}

      {size === UISize.md && (
        <div className={cn(styles.pagination__list, classes.list)}>
          {pageNumbers.map((page, index) =>
            page === '...' ? (
              <span key={`dots-${index}`} className={cn(styles.pagination__dots, classes.dots)}>
                ...
              </span>
            ) : (
              <button
                key={page}
                className={cn(
                  styles.pagination__page,
                  page === currentPage && styles.pagination__pageActive,
                  classes.page,
                )}
                type="button"
                onClick={() => handlePageClick(page as number)}
                disabled={page === currentPage}
              >
                {page}
              </button>
            ),
          )}
        </div>
      )}

      {totalPages > 1 && (
        <button
          className={cn(
            styles.pagination__button,
            isNextDisabled && styles.pagination__buttonDisabled,
          )}
          type="button"
          onClick={handleNextClick}
          disabled={isNextDisabled}
        >
          {size === UISize.md && (
            <span className={cn(styles.pagination__buttonText, classes.buttonText)}>
              {t('plugins.pagination.next')}
            </span>
          )}
          <span className={cn(styles.pagination__icon, classes.icon)}>
            <IconMonoChevronRight />
          </span>
        </button>
      )}
    </div>
  );
};
