"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Mikal_GithubLink;

    PLUGIN_CLASS.Instance = class GithubLinkInstance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }

        Release() { }

        OnCreate() {
            globalThis._Mikal_GithubLinkURL = this._inst.GetPropertyValue("github-link")
        }

        OnPropertyChanged(id, value) {
            if (id == "github-link") globalThis._Mikal_GithubLinkURL = value
        }

        LoadC2Property(name, valueString) {
            return false; // not handled
        }

        GetGithubLink() {
            return (this._githubLink)
        }
    };
}