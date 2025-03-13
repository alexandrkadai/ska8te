import { SVGProps } from 'react';
import clsx from 'clsx';
export function TallLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 366 420"
      className={clsx(className, 'animate-squiggle')}
      {...props}
    >
      <path
        fill="currentColor"
        d="M95 109c-3 6 0 14-3 20s-10 9-15 13c-4 4-6 7-11 8-9 3-20-1-28-1-8 1-15-1-20-7-2-6-5-10-9-16l-9-26c0-6 2-17 9-18h7c38-3 16 38 34 46 6 3 11 0 15-4 7-2 10-8 7-15-2-11-2-24-15-27-7 1-14-4-20-8-7-5-16-6-22-11-4-4-1-10-1-14 1-12 11-20 22-19 6-4 12-4 19-6 7 0 18-6 22 0 7 2 12 8 16 14 1 8-3 17-12 16-13 0-17-10-33-9-9-1-14 8-4 12 9 9 22 8 32 13 6 3 10 11 14 17 5 6 3 14 5 22m85-43c1 11-1 22-5 32 0 9-4 16-13 21-7 5-26 8-34 3-9-8-24-13-24-28 1-5 0-9-2-13-1-7 3-13 3-20-3-18 8-35 2-53-6-12 18-8 21-2 2 14-3 27-5 40-1 4 2 7 2 11-3 10 0 21 1 32 4 3 13 5 17 1 2-5 2-11 2-16-1-3 2-6 2-10-3-7-1-15 0-23 1-7-2-14 1-20 7-6 24-17 30-5 6 16-2 33 2 50m97 18c-2 7 0 15-2 21-3 2-6 5-4 10-1 6-13 10-18 14-6 2-14-2-20 1-8 4-21-2-30-3a15 15 0 0 1-9-1c-3-2-8-2-7-6l-2-1c-2-2-3-4-3-7 0-13 10-10 12-19 1-7-2-15-2-21 3-11 3-22 1-33l1-20c-1-4-3-8-1-12 5-5 12-3 19-4 9-3 18-3 28-2 5 0 12-3 16 1 8 5 16 10 19 20 2 4-2 7-1 12 1 11-10 17-20 17 1 3 4 3 6 5l9 9c2 7 8 11 8 19m-29-55c3-16-35-14-37-2 3 29-4 18 22 17 10-3 14-3 15-15m-8 38c-2-1-3-5-7-5-6 0-14-1-20 1v25c1 3-1 8 2 10 25 6 34-7 25-31m124 23c0 10 3 20-1 30 0 12-7 22-18 26-22 1-25 8-46-7-10-5-6-19-11-27-2-2 0-5-1-7v-5c3-6 0-12-1-17l5-30c0-6 3-12 2-18 2-10 23-3 17 14 1 8-2 15-2 24-1 11 2 22 2 33l3 12c5 4 12 6 18 2 5-6 0-17 2-25-2-11-7-10-4-23-2-10-8-29 9-26 25-7 20 29 26 44M107 214c-9 22-31 1-9 33-4 10 9 19 4 29-2 5-7 8-12 9-6 4-15 9-21 2-2-4 0-10-4-14-3-6-1-12-3-19-6-5-3-19-11-22-4 1-6 0-8 3-1 6 2 13 0 19-6 6-4 15-2 23 3 8-10 13-16 11-4 0-10 1-12-4-4-16 1-13 3-25-1-6-3-11-3-17 1-6 3-13 1-19 0-6 2-13-2-18 0-5 1-10-1-15 0-3-3-4-4-7-2-13 13-18 24-18 11-1 22 2 33 0 14-3 33-9 42 7 2 4 2 9 0 13 2 9 6 19 1 29m-19-13c-3-5-4-11-5-16-7-8-18 2-27 0-26 11-27-2-17 29 13-3 15 3 30-5 8 0 18 4 19-8m128 37c-2 5-4 10-4 15s-1 8-5 11l-1 6c-2 5-9 6-13 10-5 3-12 0-17 0-16 3-33 4-48 0-1-1-2 0-1-1 0-3-4-5-4-8-3-10 0-12 5-18 2-10-1-22 0-32 3-10 1-21-2-31-2-7 1-16 0-23 0-6-9-12-3-18 7-4 17-3 25-3 11-4 21-4 32-3 16-2 18 1 31 10 8 8 12 20 6 31-4 13-8 15-21 17 0 4 4 4 6 5l10 11c2 7 7 13 4 21m-24-63c2-18-42-18-44-3 5 36-6 21 26 20 12-3 15-4 18-17m-7 45c-4-1-6-5-10-5h-25l1 28c0 4-3 10 1 12 10 4 23 1 32-3 9-8 8-24 1-32m78-24c-2 6 0 13-2 18-5 7-6 13-6 22-3 5-1 9 0 14-1 8-1 22-9 26-10 3-10-4-12-13-2-3-4-5-3-10 0-7 2-15 1-23-2-7-1-13 1-20-1-6-7-8-3-15 2-6-3-13 2-18 2-6 8-4 12-6 5-3 11 1 15 3 4 6 5 14 4 22m99 67c1 2 0 4-1 6l2 19c0 5 3 9 1 14 0 3-2 4-3 6-1 3-2 6-5 7-8 9-16-2-17-10-8-9-5-21-4-31l-5-17c-2-3-6 1-7 2-8 2-16-3-24-2-11-2-6 12-9 18-7 7-4 22-14 25-5 0-8-6-11-9-4-4-4-9-3-15 1-1 4-3 3-5 0-9 9-16 8-26-1-7 1-11 5-16 1-6-1-8 4-14 2-9-1-13 5-21-2-8 7-13 6-21 4-13 21-9 31-6 6 0 12-4 17 0 11 5 6 19 11 28 5 7 2 15 3 23 2 3 4 6 2 10-1 3 0 7 1 10-4 11-6 16 4 25m-37-25c2-4-2-9-2-12s1-6-1-8l-5-10c-2-3-1-8-4-9-5 14-11 27-14 42 8-1 18-1 26-3M61 371c-1 18-1 17-15 28-7 9-20 2-29 1-12-6-6-10-13-14-3-2 1-5-2-8s-1-7-2-10c0-3-1-14 4-10 4 0 0-7 7-3 8 3 4 15 10 19 3 5 7 15 14 11 2-4 5-5 8-7 3-5-1-20-7-22-10-4-22-7-30-15-9-10 0-31 13-30 5-2 29-9 31-1l4 4 4 6c2 6-2 20-11 16-5-4-5-13-13-11-12-2-18 4-6 11 6 7 6 4 13 7 14 8 21 10 20 28m86-51c-1 10-27 9-20 20 2 2 2 5 3 9 4 8 9 15 12 23-2 8-13 10-20 12-7-1-7-10-9-16q-4.5-6-6-15c-1-3-3-10-7-5-4 1-5 3-3 7 0 10 6 25-1 34-7 2-22 4-24-7-2-10 3-20 3-30-1-7 1-14 2-22l1-16c0-4 5-4 5-8-1-8 8-9 14-7 6 3-9 41 0 34 13-8 25-15 39-19 6-5 13-4 11 6m70 51c0 7-4 14-7 20-5 2-12-3-13-8 2-6 2-14-1-18-2-1-3 1-5 2-4 1-8-2-12-3-9-3-10 0-11 9l-4 6c-3 4-4 9-7 12-7 5-15-13-10-17 2-1 2-3 2-5 5-6 8-14 9-22 1-4 6-6 5-11 0-2 2-2 3-4 2-4 0-9 3-12 4-2 2-5 4-8l6-12c6-6 14-2 21 1 5 0 9-2 13 1 7 5 2 16 5 23 3 6-2 13 1 19-2 4 0 9-2 13-3 5-2 9 0 14m-22-19c1-3-1-7-1-9l1-6-4-8c0-2 1-5-2-7-4 10-10 19-13 30l19-1zm100-23c3 25-22 8-35 13-2 15-1 31-3 46 2 8-4 13-11 11-3 0-8-1-8-5 0-5-1-9-5-13-1-9 6-19 6-28 7-25-10-5-13-23-1-2 1-3 2-5 1-10 8-11 16-7 4 0 3-11 14-6 2 10 11 7 18 9 5 5 19-2 19 8m63 78c-3 1-2 5-5 7s-8 1-11 2c-4 1-6 4-9 4-8-1-16 0-24-2-3-3-7-5-11-6-4-2-7-5-8-9-1-3-5-5-2-8 1-2 3-3 5-3 2 1 3 0 4-1 4-13 2-28 7-42 1-2 0-4-2-5-8-9 9-17 17-15 5 1 11 4 17 4 5 1 11 0 14 4 6 7 20 6 13 19-12 8-30-4-44-4-5 12 1 13 11 15 4 1 8-3 11 0 1 2 3 4 2 6 0 10-8 9-16 8-2-1-5-2-6 1 0 4-2 8 1 10 10 8 46-8 36 15"
      ></path>
    </svg>
  );
}
