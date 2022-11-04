# frozen_string_literal: true

class Api::Admin::OrganizationsController < ApplicationController
  before_action :current_organization!, only: %i[show update create]

  def create
    unless @_current_organization.authenticate(params[:password])
      respond_with_error(t("organization.incorrect_credential"), :unauthorized)
    end
  end

  def show
    render
  end

  def update
    @_current_organization.name = params[:name]
    if !params[:is_password_protected]
      @_current_organization.password = nil
    else
      @_current_organization.password = params[:password] if params[:password].present?
    end
    @_current_organization.is_password_protected = params[:is_password_protected]
    @_current_organization.save!
    respond_with_success(t("successfully_updated", entity: Organization))
  end
end