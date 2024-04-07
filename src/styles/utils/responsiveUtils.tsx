import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type AppCssVars = "--app-padding-right";

export enum DEVICE_BREAKPOINT {
  fullhd = 1408,
  widescreen = 1200,
  desktop = 1023,
  smallMonitor = 992,
  tablet = 768,
  largeMobile = 460,
  mobile = 380,
  smallMobile = 324,
}

const customSmallerThanMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const customLargerThanMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export const screenSmallerThan = {
  custom: customSmallerThanMediaQuery,
  fullhd: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.fullhd),
  widescreen: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.widescreen),
  desktop: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.desktop),
  smallMonitor: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.smallMonitor),
  tablet: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.tablet),
  largeMobile: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.largeMobile),
  mobile: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.mobile),
  smallMobile: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.smallMobile),
};

export const screenLargerThan = {
  custom: customLargerThanMediaQuery,
  fullhd: customLargerThanMediaQuery(DEVICE_BREAKPOINT.fullhd),
  widescreen: customLargerThanMediaQuery(DEVICE_BREAKPOINT.widescreen),
  desktop: customLargerThanMediaQuery(DEVICE_BREAKPOINT.desktop),
  smallMonitor: customLargerThanMediaQuery(DEVICE_BREAKPOINT.smallMonitor),
  tablet: customLargerThanMediaQuery(DEVICE_BREAKPOINT.tablet),
  largeMobile: customLargerThanMediaQuery(DEVICE_BREAKPOINT.largeMobile),
  mobile: customLargerThanMediaQuery(DEVICE_BREAKPOINT.mobile),
  smallMobile: customLargerThanMediaQuery(DEVICE_BREAKPOINT.smallMobile),
};

export const getViewPortHeightCssString = (percent: number = 100) =>
  `calc(${percent} * var(--vh, 1vh))`;
export const getViewPortWidthCssString = (percent: number = 100) =>
  `calc(${percent} * var(--vw, 1vw))`;

//----------------------------------

interface IResponsiveContext {
  screenWidth: number;
  screenHeight: number;
  isScreenSmallerThanTablet: boolean;
  setAppCssVar: (key: AppCssVars, value: string) => void;
}

const initialValues = {} as IResponsiveContext;
export const ResponsiveContext =
  createContext<IResponsiveContext>(initialValues);

export const useResponsive = () =>
  useContext<IResponsiveContext>(ResponsiveContext);

export const ResponsiveProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [screenHeight, setScreenHeight] = useState(640);
  const [screenWidth, setScreenWidth] = useState(480);
  const isScreenSmallerThanTablet = screenWidth < DEVICE_BREAKPOINT.tablet;

  const screenListenerEvent = useCallback(() => {
    const screenWidth = window.innerWidth;
    setScreenWidth(screenWidth);

    const screenHeight = window.innerHeight;
    setScreenHeight(screenHeight);

    document.body.style.setProperty("--vh", `${screenHeight / 100}px`);
    document.body.style.setProperty("--vw", `${screenWidth / 100}px`);
  }, []);

  const setAppCssVar = useCallback((key: AppCssVars, value: string) => {
    document.body.style.setProperty(key, value);
  }, []);

  //----------------------------

  useEffect(() => {
    screenListenerEvent();
  }, [screenListenerEvent]);

  useEffect(() => {
    window.addEventListener("resize", screenListenerEvent);

    return () => {
      window.removeEventListener("resize", screenListenerEvent);
    };
  }, [screenListenerEvent]);

  return (
    <ResponsiveContext.Provider
      value={{
        screenWidth,
        isScreenSmallerThanTablet,
        screenHeight,
        setAppCssVar,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
