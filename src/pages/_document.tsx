import type { DocumentContext } from "next/document";
import NextDocument from "next/document";
import { css } from "stitches.config";

// eslint-disable-next-line import/no-default-export
export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles: any[];
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles.map((content, index) => {
              return (
                <style
                  key={index}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              );
            })}
          </>
        ),
      };
    } finally {
      console.error("hmmm");
    }
  }
}
