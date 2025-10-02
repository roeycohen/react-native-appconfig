package com.appconfig

import android.content.Context
import android.content.RestrictionsManager
import android.os.Bundle
import android.util.Log

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

@ReactModule(name = AppconfigModule.NAME)
class AppconfigModule(reactContext: ReactApplicationContext) :
  NativeAppconfigSpec(reactContext) {

  private val context = reactApplicationContext

  override fun getName(): String {
    return NAME
  }

  override fun managedConfig(): WritableMap {
    return try {
      val restrictionsManager: RestrictionsManager = context.getSystemService(Context.RESTRICTIONS_SERVICE) as RestrictionsManager
      val managed: Bundle = restrictionsManager.applicationRestrictions
      Arguments.fromBundle(managed)
    } catch (e: Exception) {
      Arguments.createMap()
    }
  }

  companion object {
    const val NAME = "Appconfig"
  }
}
