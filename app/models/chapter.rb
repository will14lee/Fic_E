class Chapter < ApplicationRecord
    belongs_to :author, class_name: "User"
    has_many :story
    has_many :pages, dependent: :destroy
end
