"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Mikal_GithubLink;

    PLUGIN_CLASS.Type = class GithubLinkType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }

        GetGithubLink(sdkType) {
            return this._githubLink
        }
    };
}