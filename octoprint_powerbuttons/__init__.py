# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class PowerButtonsPlugin(octoprint.plugin.AssetPlugin):
        
    def get_assets(self):
        return dict(
            js=["js/powerbuttons.js"]
        )

__plugin_name__ = "Power Supply Control"
__plugin_implementation__ = PowerButtonsPlugin()
