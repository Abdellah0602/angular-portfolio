import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updatePageSeo(data: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    // Update title
    if (data.title) {
      this.title.setTitle(`${data.title} | Abdellah ABDEDOU - D├®veloppeur Full Stack`);
    }

    // Update meta tags
    const metaTags = [
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:image', content: data.image },
      { property: 'og:url', content: data.url },
      { property: 'og:type', content: data.type || 'website' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: data.image },
    ];

    metaTags.forEach(tag => {
      if (tag.content) {
        if (tag.name) {
          this.meta.updateTag({ name: tag.name, content: tag.content });
        } else if (tag.property) {
          this.meta.updateTag({ property: tag.property, content: tag.content });
        }
      }
    });
  }

  addStructuredData(data: any) {
    let script = this.document.getElementById('structured-data');
    if (script) {
      script.remove();
    }

    const scriptElement = this.document.createElement('script') as HTMLScriptElement;
    scriptElement.id = 'structured-data';
    scriptElement.type = 'application/ld+json';
    scriptElement.textContent = JSON.stringify(data);
    this.document.head.appendChild(scriptElement);
  }

  updateCanonicalUrl(url: string) {
    let link = this.document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  addPreloadLinks(resources: Array<{href: string; as: string; type?: string}>) {
    resources.forEach(resource => {
      const link = this.document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      this.document.head.appendChild(link);
    });
  }
}
